import React from 'react'

const EditUsers = () => {
  return (
    <div>
                <div className="iput-left">
          <h3> Info Personel </h3>

          <input
            defaultValue={user?.name}
            onChange={(e) => setupdate({ ...update, name: e.target.value })}
          />
          <input
            type="text"
            className="form-control"
            name="username"
            defaultValue={user?.lastName}
            required=""
            autoFocus=""
            onChange={(e) => setupdate({ ...update, lastName: e.target.value })}
          />
          <input value={user?.anneenaissance} />

          <input value={user?.genre} />
          <input
            type="text"
            className="form-control"
            defaultValue={user?.email}
            onChange={(e) => setupdate({ ...update, email: e.target.value })}
          />
          <input
            type="text"
            className="form-control"
            name="username"
            placeholder="Votre Profession"
            required=""
            autoFocus=""
            onChange={(e) =>
              setupdate({ ...update, Profession: e.target.value })
            }
          />
        </div>
    </div>
  )
}

export default EditUsers