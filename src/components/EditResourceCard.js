import React, { useState, useContext } from 'react';
import { AuthContext } from "./../context/auth.context";
import { updateResourceService, deleteResourceService } from '../services/resources.services';

function EditResourceCard({ title, tags, source, _id }) {
    const [inputTitle, setInputTitle] = useState(title);
    // eslint-disable-next-line
    const [inputTags, setInputTags] = useState(tags);
    const [inputSource, setImputSource] = useState(source);
    const [isDeleted, setIsDeleted] = useState(false);
    const idResource = _id;
    // eslint-disable-next-line
    const { user } = useContext(AuthContext);


    const handleEditResource = async (e) => {
        try {
            const requestBody = { inputTitle, inputTags, inputSource };
            await updateResourceService(idResource, requestBody);
        } catch (err) {
            console.log(err);
        }
    };
    const handleDeleteResource = async (e) => {
        try {
            await deleteResourceService(idResource);
            setIsDeleted(true);
        } catch (err) {
            console.log(err);
        }
    };


    return (
        <div>
            {!isDeleted && (
                <div>
                    <form onSubmit={handleEditResource}>
                        <div class="form-row">
                            <div class="col">
                                <input
                                    type="text"
                                    name="inputTitle"
                                    class="form-control"
                                    placeholder="Title"
                                    value={inputTitle}
                                    onChange={(e) => { setInputTitle(e.target.value); }}
                                />
                            </div>
                            <div class="col">
                                <input
                                    type="text"
                                    name="inputSource"
                                    class="form-control"
                                    placeholder="Source"
                                    value={inputSource}
                                    onChange={(e) => { setImputSource(e.target.value); }}
                                />
                            </div>
                        </div>
                        <button type="submit" class="btn btn-outline-success">Edit</button>
                        <button onClick={handleDeleteResource} class="btn btn-outline-danger">Delete</button>
                    </form>
                </div>
            )}
            <br></br>
            <br></br>
        </div>
    );
}
export default EditResourceCard;