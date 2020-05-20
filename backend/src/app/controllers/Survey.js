import Survey from '../models/Survey';

class SurveyController {
  index(request, response) {
    const surveys = await Survey.findAll();

    return response.json(surveys);
  }

  async store(request, response) {
    const { title, description, expire } = request.body;

    const survey = await Survey.create({
      title,
      description,
      expire: new Date(expire),
    });

    return response.status(201).json(survey);
  }
}

export default new SurveyController();
