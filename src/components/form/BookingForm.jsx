import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import SpinnerLoading from '../common/spinner/Spinner';
import toast from 'react-hot-toast';

// region Main Component
export default function BookingForm() {
  const [formData, setFormData] = useState({
    departure: '',
    destination: '',
    date: '',
    serviceHours: '',
    phone: '',
    email: '',
    name: '',
    passengers: '',
    info: '',
  });
  const formRef = useRef();
  const [errors, setErrors] = useState({});
  const [isLoading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: value ? '' : 'Please fill in this field.' }));
  };

  const cleanupFormData = () => {
    setFormData({
      departure: '',
      destination: '',
      date: '',
      serviceHours: '',
      phone: '',
      email: '',
      name: '',
      passengers: '',
      info: '',
    });
  };

  // region Send Email
  const sendFormData = async () => {
    const emailServiceId = import.meta.env.VITE_EMAIL_SERVICE_ID ?? '';
    const emailTemplateId = import.meta.env.VITE_EMAIL_TEMPLATE_ID ?? '';
    const emailPublicKey = import.meta.env.VITE_EMAIL_PUBLIC_KEY ?? '';

    // service_id = service_b1dzulk
    try {
      await emailjs.sendForm(emailServiceId, emailTemplateId, formRef.current, emailPublicKey);
      toast.success('Email Sent Successfully!');
      cleanupFormData();

    } catch (error) {
      console.log('THE ERROR - ', error);
      const cleanErrorMsg = error?.split('Visit')[0].trim();
      toast.error(cleanErrorMsg ?? error.text);

    } finally {
      setLoading(false);
    }
  };

  // region Submit Form
  const handleSubmit = async(e) => {
    e.preventDefault();
    const newErrors = {};
    setLoading(true);

    Object.entries(formData).forEach(([key, value]) => {
      if (!value) newErrors[key] = 'Please fill in this field.';
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // alert('Form submitted!');
      await sendFormData();
    }

    setLoading(false);
  };

  // region UI
  return (
    <div
      className="bg-fixed bg-cover bg-center h-[70vh] flex items-center justify-center object-cover"
      style={{ backgroundImage: `url('/images/travel3.jpg')` }}>
      <div className="backdrop-blur-md bg-white/40 bg-opacity-90 max-w-3xl mx-auto p-6 my-10 rounded-xl shadow-lg">
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <input
                name="departure"
                placeholder="Departure Point"
                className="w-full border p-2 rounded outline-0 bg-none"
                value={formData.departure}
                onChange={handleChange}
              />
              {errors.departure && <p className="text-red-900 text-sm">{errors.departure}</p>}
            </div>
            <div>
              <input
                name="destination"
                placeholder="Destination"
                className="w-full border p-2 rounded outline-0 bg-none"
                value={formData.destination}
                onChange={handleChange}
              />
              {errors.destination && <p className="text-red-500 text-sm">{errors.destination}</p>}
            </div>

            <div>
              <input
                type="date"
                name="date"
                className="w-full text-gray-700 border p-2 rounded outline-0 bg-none"
                value={formData.date}
                // value={new DateObject(new Date(formData.date ?? '')).format("dddd DD MMMM, YYYY")}
                onChange={handleChange}
              />
              {errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}
            </div>

            <div>
              <input
                name="serviceHours"
                placeholder="Service Hours"
                className="w-full border p-2 rounded outline-0 bg-none"
                value={formData.serviceHours}
                onChange={handleChange}
              />
              {errors.serviceHours && <p className="text-red-500 text-sm">{errors.serviceHours}</p>}
            </div>

            <div>
              <input
                name="phone"
                placeholder="Phone Number"
                className="w-full border p-2 rounded outline-0 bg-none"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
            </div>

            <div>
              <input
                name="email"
                placeholder="E-mail address"
                className="w-full border p-2 rounded outline-0 bg-none"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>

            <div>
              <input
                name="name"
                placeholder="Name"
                className="w-full border p-2 rounded outline-0 bg-none"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div>
              <input
                name="passengers"
                placeholder="No. of Passengers"
                className="w-full border p-2 rounded outline-0 bg-0"
                value={formData.passengers}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <textarea
              name="info"
              placeholder="Number of bags and additional information"
              className="w-full border p-2 rounded outline-0 bg-none"
              value={formData.info}
              onChange={handleChange}
            ></textarea>
          </div>

          {!isLoading ? (
            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded hover:bg-blue-700 transition"
              disabled={isLoading}
            >
              {!isLoading ? 'Send Request' : 'Loading...'}
            </button>
          ) : (
            <SpinnerLoading color="royalblue" size={100} />
          )}
        </form>
      </div>
    </div>
  );
}
