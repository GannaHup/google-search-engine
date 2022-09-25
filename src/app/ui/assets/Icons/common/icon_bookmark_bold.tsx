import React from "react"
import PropTypes from "prop-types"
import { Icons } from "../type"

const BookmarkBoldIcon = (props: Icons) => {
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
        d="M6.74998 2C5.78163 2 4.99752 2.78635 5.00001 3.75447L5.00001 3.75591L5.00001 21.25C5.00001 21.5383 5.16527 21.8011 5.42512 21.926C5.68497 22.0509 5.99341 22.0158 6.21853 21.8357L12 17.2105L17.7815 21.8357C18.0066 22.0158 18.3151 22.0509 18.5749 21.926C18.8348 21.8011 19 21.5383 19 21.25V3.75C19 2.7835 18.2165 2 17.25 2H6.74998Z"
        fill={color}
      />
    </svg>
  )
}

BookmarkBoldIcon.propTypes = {
  color: PropTypes.string,
}
BookmarkBoldIcon.defaultProps = {
  color: "#24292F",
}

export default BookmarkBoldIcon
