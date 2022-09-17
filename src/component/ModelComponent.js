import React from 'react'

export default function ModelComponent() {
  return (
    <div
  className="modal fade"
  id="exampleModal"
  tabIndex={-1}
  role="dialog"
  aria-labelledby="exampleModalLabel"
  aria-hidden="true"
>
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <button
          type="button"
          className="close"
          data-dismiss="modal"
          aria-label="Close"
        >
          <span aria-hidden="true">×</span>
        </button>
      </div>
      <div className="modal-body">
        <img loading="lazy" src="images/portfolio-img-1.jpg" alt="" />
      </div>
    </div>
  </div>
</div>

  )
}
