export const CreateSuccess=(statusCode, messageCode, data) =>{
    const successObj= {
    status: statusCode,
    message: messageCode,
    data: data
    
    }
    return successObj;

}