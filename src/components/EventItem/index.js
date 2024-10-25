// Write your code here
import './index.css'

const EventItem = props => {
  const {eventItemDetails, onEventClicked, isActive} = props
  const {id, imageUrl, name, location} = eventItemDetails

  const borderClassName = isActive ? 'border-color' : ''

  const onButtonClicked = () => {
    onEventClicked(id)
  }

  return (
    <li className="event-item-container">
      <button
        type="button"
        className={`event-btn ${borderClassName}`}
        onClick={onButtonClicked}
      >
        <img src={imageUrl} alt="event" className="event-img" />
      </button>
      <p className="event-name">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}

export default EventItem
