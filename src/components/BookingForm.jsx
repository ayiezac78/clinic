import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const fetchPatients = async () => {
  try{
    // Fetch the list of patients from the JSON API.
    const response = await axios.get('http://localhost:8000/api/appointments');
    const patients = await response.data;
    return patients;
  }catch (error){
    console.log(error);
    return [];
  }
};

//generate an incremental appointment id by calling the fetch data in json api
const generateIncrementalId = async () => {
  try{
    const patients = await fetchPatients();
    const maxId = patients.reduce((max, patient) => {
      const appointment_id = parseInt(patient.appointment_id);
      return appointment_id > max ? appointment_id : max;
    }, 0);
    const newId = maxId + 1;
    return newId.toString().padStart(4, '0');
  }catch(error){
    console.log(error);
    return null;
  }
};


function AppointmentForm() {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();


  const onSubmit = async (data) => {
    const appointment_id = await generateIncrementalId();
    axios
      .post('http://localhost:8000/api/appointments/store', { ...data, appointment_id })
      .then((response) => {
        console.log(response);
        // Send email notification to patient
        Email.send({
            SecureToken : "9fcd56c9-35b7-4f69-b965-6bf95fd0b99e",
            To : data.email_address,
            From : "contactusclinic@gmail.com",
            Subject : "Appointment Schedule Confirm",
            Body : `
            <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
            <html xmlns="http://www.w3.org/1999/xhtml" lang="EN">
            <head>
            </head>
            <body style="background-color: #f2f2f2;">
              <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
                <div style="background-color: #fff; border-radius: 4px; padding: 20px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
                  <h1 style="font-size: 28px; margin-bottom: 10px; color: #333;">AWR Clinic</h1>
                  <h2 style="font-size: 24px; margin-bottom: 20px; color: #333;">Appointment Confirmation</h2>
                  <p style="font-size: 16px; margin-bottom: 20px; color: #333;">Dear ${data.first_name} ${data.last_name},</p>
                  <p style="font-size: 16px; margin-bottom: 20px; color: #333;">Your appointment has been confirmed.</p>
                  <p style="font-size: 16px; margin-bottom: 20px; color: #333;">These are the details of your appointment schedule:</p>
                  <table style="border-collapse: collapse; width: 100%;">
                    <tbody>
                      <tr>
                        <th style="font-size: 16px; text-align: left; padding: 8px; background-color: #f2f2f2;">Appointment ID:</th>
                        <td style="font-size: 16px; text-align: left; padding: 8px;">${appointment_id}</td>
                      </tr>
                      <tr>
                        <th style="font-size: 16px; text-align: left; padding: 8px; background-color: #f2f2f2;">Date:</th>
                        <td style="font-size: 16px; text-align: left; padding: 8px;">${data.appointment_date}</td>
                      </tr>
                      <tr>
                        <th style="font-size: 16px; text-align: left; padding: 8px; background-color: #f2f2f2;">Your Choosen Time:</th>
                        <td style="font-size: 16px; text-align: left; padding: 8px;">${data.schedule_time}</td>
                      </tr>
                      <tr>
                        <th style="font-size: 16px; text-align: left; padding: 8px; background-color: #f2f2f2;">Location:</th>
                        <td style="font-size: 16px; text-align: left; padding: 8px;">16th Aguinaldo St., Iligan City, Lanao Del Norte</td>
                      </tr>
                    </tbody>
                  </table>
                  <p style="font-size: 16px; margin-top: 20px; color: #333;">Thank you for choosing our AWR Clinic.</p>
                  <p style="font-size: 16px; margin-bottom: 20px; color: #333;">If you have any questions or need to reschedule, please contact us at:</p>
                  <p style="font-size: 16px; margin-bottom: 20px; color: #333;">Phone: 123-456-7890<br />Email:contactusclinic@gmail.com</p>
                  <div style="text-align: center;">
                  <a href="https://example.com" style="display: inline-block; background-color: #333; color: #fff; padding: 10px 20px; border-radius: 4px; text-decoration: none; font-size: 16px; margin-top: 20px;">Visit our website</a>
                  </div>
                  </div>
                  </div>
                    </body>
                  </html>
          `,
          }).then(
            message => {
              toast.success("Please check your email that was sent to you!");
              reset();
            }
          );
      })
      .catch((error) => {
        console.log(error);
      });
  };


  return (
    <section className="px-4 md:px-0 md:py-20 mt-[85px] bg-[#EDFDF2] font-sora grid grid-cols-1 md:grid-cols-2 gap-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid gap-4"
      >
        <div className="mb-4">
          <label htmlFor="appointment_date" className="block font-medium mb-1">
            Scheduled Date
          </label>
          <input
            type="date"
            id="appointment_date"
            {...register("appointment_date", { required: true })}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
          />
          {errors.appointment_date && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="schedule_time" className="block font-medium mb-1">
            Scheduled Time
          </label>
          <select
            id="schedule_time"
            {...register("schedule_time", { required: true })}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
          >
            <option value="AM">AM</option>
            <option value="PM">PM</option>
          </select>
          {errors.schedule_time && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="first_name" className="block font-medium mb-1">
            First Name
          </label>
          <input
            type="text"
            id="first_name"
            {...register("first_name", { required: true })}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
          />
          {errors.first_name && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="last_name" className="block font-medium mb-1">
            Last Name
          </label>
          <input
            type="text"
            id="last_name"
            {...register("last_name", { required: true })}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
          />
          {errors.last_name && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="age" className="block font-medium mb-1">
            Age
          </label>
          <input
            type="number"
            id="age"
            {...register("age", { required: true })}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
          />
          {errors.age && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="gender" className="block font-medium mb-1">
            Gender
          </label>
          <select
            id="gender"
            {...register("gender", { required: true })}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="contact_number" className="block font-medium mb-1">
            Contact Number
          </label>
          <input
            type="tel"
            id="contact_number"
            {...register("contact_number", {
              required: true,
              pattern: /^\d{11}$/,
            })}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
          />
          {errors.contact_number && (
            <span className="text-red-500">
              Please enter a valid 11-digit phone number
            </span>
          )}
        </div>
        <div className="mb-1">
          <label htmlFor="email_address" className="block font-medium mb-1">
            Email Address
          </label>
          <input
            type="email"
            id="email_address"
            {...register("email_address", {
              required: true,
              pattern: /^\S+@\S+\.\S+$/,
            })}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
          />
          {errors.email_address && (
            <span className="text-red-500">
              Please enter a valid email address
            </span>
          )}
        </div>

        <div className="mb-4 col-span-2">
          <label htmlFor="address" className="block font-medium mb-1">
            Address
          </label>
          <input
            id="address"
            type='text'
            {...register("address", { required: true })}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
          ></input>
          {errors.address && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
        <div className="md:col-span-2 lg:col-span-2 xl:col-span-2">
          <label htmlFor="medical_concern" className="block font-medium mb-1">
            Reason for Appointment
          </label>
          <textarea
            id="medical_concern"
            {...register("medical_concern", { required: true })}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none h-32 resize-none"
          ></textarea>
          {errors.medical_concern && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>

        <div className="col-span-2">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 w-full"
          >
            Submit
          </button>
        </div>
      </form>
    <ToastContainer limit={1}/>
    </section>
  );
}

export default AppointmentForm;