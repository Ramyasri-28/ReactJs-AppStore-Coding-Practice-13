// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, updatedActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClickTab = () => {
    updatedActiveTabId(tabId)
  }

  const tabButtonClassName = isActive ? 'tab-button active' : 'tab-button'
  return (
    <li className="tab-item">
      <button className={tabButtonClassName} type="button" onClick={onClickTab}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
