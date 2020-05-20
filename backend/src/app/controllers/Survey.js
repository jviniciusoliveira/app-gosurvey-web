class SurveyController {
  index(request, response) {
    return response.send('list');
  }
}

export default new SurveyController();
