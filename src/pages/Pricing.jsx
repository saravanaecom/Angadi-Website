import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Check, CheckCheck, ChartNoAxesColumnIncreasing, Crown, Store, LockKeyhole, Mail, X } from 'lucide-react'
import Seo from '../components/Seo'
import { PHONE_LINK, PHONE_DISPLAY } from '../data/site'
import '../styles/pricing.css'

const common = [
  'Supplier, customer & item master', 'Purchase & purchase return entry',
  'Sales billing & sales return entry', 'Quotation, sale order & delivery challan',
  'Stock inward / outward entry', 'Estimate billing', 'Supplier payment & customer receipt',
  'Accounts group master', 'Cash voucher & bank voucher', 'Stock adjustment entry',
  'User privileges & rights', 'Weighing scale integration', 'Thermal / laser printer support',
  'GST reports in Excel & JSON format',
]
const advanced = ['Bill hold options', 'Barcode integration', 'Multiple MRP rate systems',
  'CRM points & loyalty management', 'Product repacking management', 'Batchwise purchase',
  'Serial number wise stock management']
const plans = [
  { id: 'basic', name: 'Basic', amount: 3999, Icon: Store, summary: 'For small businesses getting started.', features: ['Single company management', ...common] },
  { id: 'standard', name: 'Standard', amount: 4999, Icon: ChartNoAxesColumnIncreasing, summary: 'Everything you need to grow your business.', features: ['Single company management', ...common, ...advanced] },
  { id: 'premium', name: 'Premium', amount: 5999, Icon: Crown, summary: 'For businesses with advanced needs.', features: ['Multiple company management', ...common.map((f) => f === 'Stock inward / outward entry' ? 'Stock inward / outward entry & stock transfer' : f), ...advanced] },
]
const money = (amount) => `₹${amount.toLocaleString('en-IN')}`
const isPreview = import.meta.env.DEV

function PurchaseDialog({ plan, onClose, onComplete }) {
  const dialog = useRef(null)
  const [values, setValues] = useState({ name: '', mobile: '', email: '' })
  const [errors, setErrors] = useState({})
  const [unavailable, setUnavailable] = useState(false)
  useEffect(() => {
    const previousFocus = document.activeElement
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    dialog.current.showModal()
    return () => { document.body.style.overflow = previousOverflow; previousFocus?.focus() }
  }, [])

  function submit(event) {
    event.preventDefault()
    const next = {}
    if (!values.name.trim()) next.name = 'Please enter your name.'
    if (!/^[0-9]{10}$/.test(values.mobile)) next.mobile = 'Enter exactly 10 digits.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) next.email = 'Enter a valid email address.'
    setErrors(next)
    if (Object.keys(next).length) {
      event.currentTarget.elements[Object.keys(next)[0]].focus()
      return
    }
    // A static site cannot verify payments. Success is a development-only preview.
    if (isPreview) onComplete(plan)
    else setUnavailable(true)
  }
  const field = (key, label, placeholder, extra = {}) => (
    <div className="purchase-field">
      <label htmlFor={`purchase-${key}`}>{label} <span>*</span></label>
      <input id={`purchase-${key}`} name={key} required value={values[key]} placeholder={placeholder}
        {...extra} aria-invalid={Boolean(errors[key])} aria-describedby={`purchase-${key}-help`}
        onChange={(event) => {
          setValues((v) => ({ ...v, [key]: event.target.value }))
          setErrors((v) => ({ ...v, [key]: undefined }))
          setUnavailable(false)
        }} />
      <small id={`purchase-${key}-help`} className={errors[key] ? 'purchase-error' : ''}>
        {errors[key] || (key === 'mobile' ? 'Exactly 10 digits required' : key === 'email' ? 'Enter a valid email address' : '')}
      </small>
    </div>
  )
  return (
    <dialog ref={dialog} className="purchase-dialog" aria-labelledby="purchase-title" aria-describedby="purchase-subtitle" onCancel={onClose} onClick={(event) => {
      if (event.target !== event.currentTarget) return
      const r = event.currentTarget.getBoundingClientRect()
      if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) onClose()
    }}>
      <button type="button" className="purchase-close" aria-label="Close purchase dialog" onClick={onClose}><X size={24} /></button>
      <img className="purchase-logo" src="/images/angadi-logo.webp" width="142" height="78" alt="Angadi" />
      <h2 id="purchase-title">Buy <span>{plan.name}</span></h2>
      <p id="purchase-subtitle">Enter your details to continue</p>
      {isPreview && <p className="purchase-preview">Payment preview only. No money is charged and no email is sent.</p>}
      <form onSubmit={submit} noValidate>
        {field('name', 'Name', 'Enter your full name', { autoComplete: 'name', maxLength: 100, autoFocus: true })}
        {field('mobile', 'Mobile No', 'Enter 10-digit mobile number', { type: 'tel', inputMode: 'numeric', autoComplete: 'tel-national', pattern: '[0-9]{10}', maxLength: 10 })}
        {field('email', 'Email ID', 'Enter your email address', { type: 'email', autoComplete: 'email', maxLength: 254 })}
        <div className="purchase-field">
          <label htmlFor="purchase-amount">Amount</label>
          <div className="purchase-amount"><input id="purchase-amount" value={money(plan.amount)} readOnly aria-describedby="purchase-amount-help" /><LockKeyhole size={20} aria-hidden="true" /></div>
          <small id="purchase-amount-help">Set automatically for the selected annual plan</small>
        </div>
        {unavailable && <p className="purchase-unavailable" role="alert">Online payment is not available yet. Please <a href={PHONE_LINK}>call {PHONE_DISPLAY}</a> to purchase your plan. No payment has been taken.</p>}
        <button type="submit" className="pricing-button">Payment</button>
        <p className="purchase-note">All <span>*</span> fields are required</p>
      </form>
    </dialog>
  )
}

function PaymentSuccess({ plan }) {
  const heading = useRef(null)
  useEffect(() => { heading.current?.focus() }, [])
  return (
    <section className="payment-success" aria-labelledby="success-title">
      <p className="purchase-preview">Preview only — no payment was taken, no licence was issued and no email was sent.</p>
      <span className="payment-success__check"><CheckCheck size={52} aria-hidden="true" /></span>
      <h1 id="success-title" ref={heading} tabIndex={-1}>Thank you!<span>Payment successful</span></h1>
      <p>Your payment has been received successfully.</p>
      <div className="payment-success__details"><h2>Your billing software is ready to activate</h2><p>Your billing software activation details and licence number have been sent to your email address.</p></div>
      <dl className="payment-success__summary"><div><dt>Plan</dt><dd>{plan.name} — Annual</dd></div><div><dt>Amount paid</dt><dd>{money(plan.amount)}</dd></div></dl>
      <div className="payment-success__mail"><Mail size={32} aria-hidden="true" /><div><h2>Check your inbox</h2><p>Please check your spam or junk folder if you do not see the email.</p></div></div>
      <Link to="/" className="pricing-button">Back to Home</Link>
    </section>
  )
}

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState(null)
  const [completedPlan, setCompletedPlan] = useState(null)
  return (
    <>
      <Seo title="Pricing Plans" description="Choose your annual Angadi billing software plan. Basic ₹3,999, Standard ₹4,999 and Premium ₹5,999." path="/pricing" />
      <div className="pricing-page"><div className="container">
        {completedPlan ? <PaymentSuccess plan={completedPlan} /> : <>
          <header className="pricing-heading"><p>ANGADI PRICING</p><h1>Simple plans for your business</h1><span>Choose your annual billing software plan.</span></header>
          <div className="pricing-grid">{plans.map(({ Icon, ...plan }) => (
            <article className={`pricing-card${plan.id === 'standard' ? ' pricing-card--featured' : ''}`} key={plan.id} aria-labelledby={`plan-${plan.id}`}>
              {plan.id === 'standard' && <span className="pricing-popular">MOST POPULAR</span>}
              <div className="pricing-card__head"><Icon size={38} aria-hidden="true" /><div><h2 id={`plan-${plan.id}`}>{plan.name}</h2><p>{plan.summary}</p></div></div>
              <div className="pricing-card__body">
                <p className="pricing-price"><strong>{money(plan.amount)}</strong><span>/ year</span></p>
                <ul>{plan.features.map((feature) => <li key={feature}><Check size={16} strokeWidth={3} aria-hidden="true" /><span>{feature}</span></li>)}</ul>
                <button type="button" className="pricing-button" aria-label={`Buy ${plan.name}`} onClick={() => setSelectedPlan(plan)}>Buy</button>
              </div>
            </article>
          ))}</div>
        </>}
      </div></div>
      {selectedPlan && <PurchaseDialog plan={selectedPlan} onClose={() => setSelectedPlan(null)} onComplete={(plan) => { setSelectedPlan(null); setCompletedPlan(plan); window.scrollTo({ top: 0, behavior: 'instant' }) }} />}
    </>
  )
}
