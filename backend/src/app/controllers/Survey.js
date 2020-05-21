import Survey from '../models/Survey';
import Response from '../models/Response';

class SurveyController {
  async index(request, response) {
    const surveys = await Survey.findAll({
      include: {
        model: Response,
        as: 'responses',
        attributes: ['id', 'response', 'votes'],
      },
      attributes: ['id', 'title', 'description', 'expire', 'createdAt'],
    });

    return response.json(surveys);
  }

  async store(request, response) {
    const { title, description, expire, responses } = request.body;

    const survey = await Survey.create({
      title,
      description,
      expire: new Date(expire),
    });

    responses.map(async response => {
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
