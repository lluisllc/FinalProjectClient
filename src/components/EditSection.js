import React, { useState } from 'react';
import { updateSectionService, deleteSectionService } from '../services/section.services';
import { useNavigate } from 'react-router-dom'
function EditSection({ setSection, SectionId, title, Tags, refreshSection }) {
    const [inputTitle, setInputTitle] = useState(title);
    // eslint-disable-next-line
    const [inputTags, setInputTags] = useState('');
    const [isDeleted, setIsDeleted] = useState(false);
    const redirect = useNavigate()
    const handleEditSection = async (e) => {
        try {
            const updatedSection = { inputTitle, inputTags };
            const responseSection = await updateSectionService(SectionId, updatedSection);
            setSection(responseSection.data)
            refreshSection()
        } catch (err) {
            console.log(err);
        }
    };
    const handleDeleteSection = async (e) => {
        try {
            await deleteSectionService(SectionId);
            setIsDeleted(true);
            redirect('/subjects')
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div>
            {!isDeleted && (
                <div>
                    <h3>Edit/Delete Section</h3>
                    <form onSubmit={handleEditSection}>
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
                        </div>
                        <button type="submit" class="btn btn-outline-success">Edit</button>
                    </form>
                    <button onClick={handleDeleteSection} class="btn btn-outline-danger">Delete</button>
                </div>)}
        </div>
    );
}
export default EditSection;