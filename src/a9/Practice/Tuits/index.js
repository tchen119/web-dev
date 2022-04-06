import React, {useEffect, useState} from "react";
import service from './service';

const Tuits = () => {
  const [tuits, setTuits] = useState([]);
  const [tuit, setTuit] = useState({tuit: ''});
  useEffect(() =>
    service.findAllTuits()
      .then(tuits => setTuits(tuits)));
  const deleteTuit = (tuit) =>
    service.deleteTuit(tuit._id)
      .then(() => setTuits(
        tuits.filter(m => m !== tuit)));
  const createTuit = () =>
      service.createTuit({tuit: 'New Tuit'})
        .then(actualTuit =>
          setTuits([
            actualTuit, ...tuits
        ]));
  const findTuitById = (tuit) =>
      service.findTuitById(tuit._id)
        .then(tuit => setTuit(tuit));
  const updateTuit = (event) =>
      setTuit({...tuit, title: event.target.value});
  const saveTuit = (tuit) =>
      service.updateTuit(tuit)
        .then(() => setTuits(
          tuits.map(m => m._id === tuit._id ? tuit : m)
        ));
  return(
    <div>
      <h2>Tuits</h2>
      <ul className="list-group">
        <li className="list-group-item">
          <input
            defaultValue={tuit.tuit}
            className="form-control"/>
            <button
              onClick={createTuit}
              className="btn btn-success float-end">
              Create
            </button>
        </li>
        {
          tuits.map(tuit =>
            <li key={tuit._id}
                className="list-group-item">
                 <button
                   onClick={() => findTuitById(tuit)}
                   className="btn btn-warning float-end ms-2">
                   Edit
                 </button>
                 <button
                    className="btn btn-danger float-end"
                    onClick={() => deleteTuit(tuit)}>
                    Delete
                 </button>
              {tuit.tuit}
              <button
                onClick={saveTuit}
                className="btn btn-primary float-end">
                Save
              </button>
              <input
              onChange={updateTuit}
              defaultValue={tuit.tuit}
              className="form-control"
              style={{width: "50%"}}/>
            </li>
          )
        }
      </ul>
    </div>
  )
};

export default Tuits;
