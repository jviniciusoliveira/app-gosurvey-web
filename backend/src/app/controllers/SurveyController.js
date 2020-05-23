import Survey from '../models/Survey';
import Response from '../models/Response';
import File from '../models/File';

class SurveyController {
  async index(request, response) {
    const surveys = await Survey.findAll({
      include: [
        {
          model: Response,
          as: 'responses',
          attributes: ['id', 'response', 'votes'],
        },
        {
          model: File,
          as: 'image',
          attributes: ['id', 'path', 'url'],
        },
      ],
      attributes: ['id', 'title', 'description', 'expire', 'createdAt'],
    });

    return response.json(surveys);
  }

  async store(request, response) {
    const { originalname: name, filename: path } = request.file;
    const { title, expire, answers } = request.body;

    const answersParsed = JSON.parse(answers);

    console.log(path);

    const { id } = await File.create({
      name,
      path,
    });

    const survey = await Survey.create({
      title,
      expire: new Date(expire),
      image_id: id,
    });

    for (let answer in answersParsed) {
      async function setAnswer() {
        await Response.create({
          survey_id: survey.id,
          response: answersParsed[answer],
          votes: 0,
        });
      }
      setAnswer();
    }

    return response.status(201).json(survey);
  }
}

export default new SurveyController();
