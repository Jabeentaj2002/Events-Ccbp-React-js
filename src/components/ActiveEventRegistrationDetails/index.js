// Write your code here
import './index.css'

const registrationStatus = {
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {activeEventRegistrationStatus} = props

  const renderNoActiveEvent = () => (
    <p className="no-active-event-description">
      Click on an event, to view its registration details
    </p>
  )
  const renderRegistrationClosed = () => (
    <div className="view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="status-img"
      />
      <h1 className="status-heading">Registrations Are Closed Now!</h1>
      <p className="registration-closed-now">
        Stay tuned, We will reopen the registrations soon!
      </p>
    </div>
  )

  const renderRegisteredView = () => (
    <div className="view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="status-img"
      />
      <h1 className="status-heading">
        You have already registered for the event
      </h1>
    </div>
  )

  const renderYetToRegister = () => (
    <div className="view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="status-img"
      />
      <p className="status-heading">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button type="button" className="register-here">
        Register Here
      </button>
    </div>
  )

  const renderActiveEventRegistrationDetails = () => {
    switch (activeEventRegistrationStatus) {
      case registrationStatus.yetToRegister:
        return renderYetToRegister()
      case registrationStatus.registered:
        return renderRegisteredView()
      case registrationStatus.registrationClosed:
        return renderRegistrationClosed()
      default:
        return renderNoActiveEvent()
    }
  }

  return (
    <div className="registration-status-container">
      {renderActiveEventRegistrationDetails()}
    </div>
  )
}

export default ActiveEventRegistrationDetails
