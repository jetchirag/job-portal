import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const FormUpload = ({ id, setId }) => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append('picture', data.picture[0]);
    formData.append('resume', data.resume[0]);
    console.log(id);
    console.log(formData);
    console.log(id.applyId);
    const res = await fetch(
      `https://hammerhead-app-qmja6.ondigitalocean.app/applications/${id.applyId}`,
      {
        method: 'PUT',
        body: formData,
      }
    ).then((res) => navigate(`/apply/upload/${id.applyId}/submitted`));
    alert(JSON.stringify(`${res.message}, status: ${res.status}`));
  };
  return (
    <div className='container'>
      <div className='heading'>
        <p>Job Application File Upload</p>
      </div>
      <form className='' onSubmit={handleSubmit(onSubmit)}>
        <div class='mb-3'>
          <label for='formFile' class='form-label'>
            Passport size photo
          </label>
          <input
            class='form-control'
            type='file'
            id='formFile'
            {...register('picture')}
          />
        </div>
        <div class='mb-3'>
          <label for='formFile2' class='form-label'>
            Resume
          </label>
          <input
            class='form-control'
            type='file'
            id='formFile2'
            {...register('resume')}
          />
        </div>
        <div class='mb-3'>
          <button className='btn btn-primary' type='submit'>
            Upload
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormUpload;
