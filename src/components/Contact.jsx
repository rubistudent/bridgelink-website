import { useState } from 'react'
import { hours } from '../data'

export default function Contact() {
  // A controlled form: React state holds every field's value.
  const [form, setForm] = useState({ name: '', phone: '', email: '', company: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...form })
    })
      .then(() => {
        setSent(true)
        setTimeout(() => {
          setSent(false)
          setForm({ name: '', phone: '', email: '', company: '', subject: '', message: '' })
        }, 2600)
      })
      .catch((error) => alert('Error sending message: ' + error))
  }

  const inputClass =
    'w-full bg-cream/5 border border-cream/15 rounded-lg px-3.5 py-3 text-cream text-sm placeholder-cream/35 outline-none focus:border-coral-soft focus:bg-cream/10 transition-colors'

  return (
    <section id="contact" className="bg-indigo-deep pb-24 pt-4">
      <div className="max-w-[1200px] mx-auto px-8">
        <p className="font-mono text-xs tracking-widest uppercase text-teal-soft flex items-center gap-2.5 mb-3.5">
          <span className="w-5 h-px bg-coral inline-block" /> Let's get in touch
        </p>

        <div className="grid md:grid-cols-2 gap-14 mt-8">
          <div>
            <h2 className="font-display font-semibold text-cream text-[clamp(28px,3.4vw,40px)] leading-tight">
              Tell us about your brand — we'll bridge the rest.
            </h2>
            <p className="text-cream/65 mt-4 max-w-[420px]">
              Contact us about anything related to our company or services. We'll do our best
              to get back to you as soon as possible.
            </p>

            <div className="mt-7 flex flex-col gap-3.5">
              <a href="mailto:bridgelinklimited@gmail.com" className="flex items-center gap-3 text-cream font-semibold text-sm">
                <span className="w-9 h-9 rounded-full bg-cream/10 border border-cream/15 flex items-center justify-center">✉</span>
                bridgelinklimited@gmail.com
              </a>
              <a href="tel:+254722396042" className="flex items-center gap-3 text-cream font-semibold text-sm">
                <span className="w-9 h-9 rounded-full bg-cream/10 border border-cream/15 flex items-center justify-center">☎</span>
                +254 722 396042
              </a>
              <span className="flex items-center gap-3 text-cream font-semibold text-sm">
                <span className="w-9 h-9 rounded-full bg-cream/10 border border-cream/15 flex items-center justify-center">⚲</span>
                Teak House, 2nd Floor, Room 18
              </span>
            </div>

            <div className="mt-9">
              <p className="font-mono text-xs tracking-widest uppercase text-teal-soft mb-4">Opening hours</p>
              <table className="w-full">
                <tbody>
                  {hours.map(([day, time]) => (
                    <tr key={day} className="border-b border-cream/10 last:border-none">
                      <td className="py-2 font-bold text-cream text-sm w-2/5">{day}</td>
                      <td className="py-2 text-cream/75 text-sm">{time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <form onSubmit={handleSubmit} name="contact" data-netlify="true" className="bg-cream/5 border border-cream/15 rounded-2xl p-8">
            <input type="hidden" name="form-name" value="contact" />
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block font-mono text-[11px] tracking-wider uppercase text-cream/55 mb-2">Name</label>
                <input className={inputClass} name="name" value={form.name} onChange={handleChange} placeholder="Your full name" required />
              </div>
              <div>
                <label className="block font-mono text-[11px] tracking-wider uppercase text-cream/55 mb-2">Phone number</label>
                <input className={inputClass} name="phone" value={form.phone} onChange={handleChange} placeholder="+254 7xx xxx xxx" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block font-mono text-[11px] tracking-wider uppercase text-cream/55 mb-2">Email</label>
                <input className={inputClass} type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@example.com" required />
              </div>
              <div>
                <label className="block font-mono text-[11px] tracking-wider uppercase text-cream/55 mb-2">Company</label>
                <input className={inputClass} name="company" value={form.company} onChange={handleChange} placeholder="Optional" />
              </div>
            </div>
            <div className="mb-4">
              <label className="block font-mono text-[11px] tracking-wider uppercase text-cream/55 mb-2">Subject</label>
              <input className={inputClass} name="subject" value={form.subject} onChange={handleChange} placeholder="What's this about?" required />
            </div>
            <div className="mb-5">
              <label className="block font-mono text-[11px] tracking-wider uppercase text-cream/55 mb-2">Message</label>
              <textarea className={`${inputClass} min-h-[100px] resize-y`} name="message" value={form.message} onChange={handleChange} placeholder="Tell us about your project…" required />
            </div>
            <button type="submit" className="w-full justify-center bg-coral text-white font-bold text-sm px-7 py-3.5 rounded-full shadow-lg shadow-coral/40 hover:-translate-y-0.5 transition-transform">
              {sent ? 'Message sent ✓' : 'Send message'}
            </button>
            <p className="text-xs text-cream/45 mt-3">
              We'll reply from bridgelinklimited@gmail.com, usually within one business day.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
