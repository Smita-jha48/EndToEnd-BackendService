const { contentController } = require('../../controllers');
const { contentService } = require('../../services');

describe('collectionController', () => {
  const mockData = {
    id: 1,
    name: 'company_profile',
    collection_id: 1,
  };
  it('should create a new content type', async () => {
    jest.spyOn(contentService, 'createContent').mockResolvedValue(mockData);
    const mockReq = {
      body: jest.fn(),
    };
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    await contentController.createContent(mockReq, mockRes);
    expect(mockRes.status).toBeCalledWith(201);
    expect(mockRes.json).toBeCalledWith({ data: mockData });
  });
  

});