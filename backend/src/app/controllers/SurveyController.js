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
          attributes: ['id', 'url'],
        },
      ],
      attributes: ['id', 'title', 'description', 'expire', 'createdAt'],
    });

    return response.json(surveys);
  }

  async store(request, response) {
    const { originalname: name, filename: path } = request.file;
    const { title, description, expire, responses } = request.body;

    const responsesParsed = JSON.parse(responses);

    const { id, url } = await File.create({
      name,
      path,
    });

    const survey = await Survey.create({
      title,
      description,
      expire: new Date(expire),
      image_id: id,
    });

    responsesParsed.map(async response => {
      await Response.create({
        survey_id: survey.id,
        response,
        votes: 0,
      });
    });

    return response.status(201).json(survey);
  }
}

export default new SurveyController();
