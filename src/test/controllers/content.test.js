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

  it('should get all content types', async () => {
    jest.spyOn(contentService, 'getAllContent').mockResolvedValue([mockData]);
    const mockReq = {
      body: jest.fn(),
    };
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    await contentController.getAllContent(mockReq, mockRes);
    expect(mockRes.status).toBeCalledWith(200);
    expect(mockRes.json).toBeCalledWith({ data: [mockData] });
  });

  it('should edit content type name', async () => {
    jest.spyOn(contentService, 'editContentName').mockResolvedValue(true);
    const mockReq = {
      body: jest.fn(),
    };
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    await contentController.editContentName(mockReq, mockRes);
    expect(mockRes.status).toBeCalledWith(200);
    expect(mockRes.json).toBeCalledWith({ data: true });
  });

  it('should add a new field to a content type', async () => {
    jest.spyOn(contentService, 'addField').mockResolvedValue(mockData);
    const mockReq = {
      body: jest.fn(),
    };
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    await contentController.addField(mockReq, mockRes);
    expect(mockRes.status).toBeCalledWith(200);
    expect(mockRes.json).toBeCalledWith({ data: mockData });
  });
  it('should edit a field in a content type', async () => {
    jest.spyOn(contentService, 'editField').mockResolvedValue(mockData);
    const mockReq = {
      body: jest.fn(),
    };
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    await contentController.editField(mockReq, mockRes);
    expect(mockRes.status).toBeCalledWith(200);
    expect(mockRes.json).toBeCalledWith({ data: mockData });
  });
  it('should delete a field in a content type', async () => { 
    jest.spyOn(contentService, 'deleteField').mockResolvedValue(true);
    const mockReq = {
      body: jest.fn(),
    };
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    await contentController.deleteField(mockReq, mockRes);
    expect(mockRes.status).toBeCalledWith(200);
    expect(mockRes.json).toBeCalledWith({ data: true });
  });


});