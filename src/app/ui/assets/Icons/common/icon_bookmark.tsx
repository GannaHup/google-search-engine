import React from "react"
import PropTypes from "prop-types"
import { Icons } from "../type"

const BookmarkIcon = (props: Icons) => {
  const { color } = props
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 3.75C5 2.7835 5.7835 2 6.75 2H17.25C18.2165 2 19 2.7835 19 3.75V21.25C19 21.5383 18.8347 21.8011 18.5749 21.926C18.315 22.0509 18.0066 22.0158 17.7815 21.8357L12 17.2105L6.21852 21.8357C5.99339 22.0158 5.68496 22.0509 5.42511 21.926C5.16526 21.8011 5 21.5383 5 21.25V3.75ZM6.75 3.5C6.61193 3.5 6.5 3.61193 6.5 3.75V19.6895L11.5315 15.6643C11.8054 15.4452 12.1946 15.4452 12.4685 15.6643L17.5 19.6895V3.75C17.5 3.61193 17.3881 3.5 17.25 3.5H6.75Z"
        fill={color}
      />
    </svg>
  )
}

BookmarkIcon.propTypes = {
  color: PropTypes.string,
}
BookmarkIcon.defaultProps = {
  color: "#24292F",
}

export default BookmarkIcon
