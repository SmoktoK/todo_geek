import React from 'react';
import {Link, useParams} from 'react-router-dom'


const ProjectNoteItem = ({author, note}) => {
    return (
        <tr>
            <td>
                <Link to={`/users/${author?.id}`}
                      className='text-decoration-none'>{`${author?.first_name} ${author?.last_name}`}</Link>
            </td>
            <td>
                {note?.body}
            </td>
            <td>
                {note?.createdAt}
            </td>
            <td>
                {note?.updatedAt}
            </td>
            <td>
                <input type='checkbox' defaultChecked={note?.isActive} disabled/>
            </td>
        </tr>
    )
};

const ProjectNotesList = ({users, projects, notes}) => {
    let {projectId} = useParams();
    let project = projects?.filter((project) => project.id === +projectId);
    let projectNotes = notes?.filter((note) => note.project === +projectId);
    return (
        <div>
            <h1 className='text-center'>{project?.name}</h1>
            <table className='table table-striped table-borderless mx-auto w-auto' style={{'width': '10%'}}>
                <thead>
                <tr>
                    <th scope='col' style={{'width': '10%'}}>Автор</th>
                    <th scope='col' style={{'width': '65%'}}>Содержание</th>
                    <th scope='col' style={{'width': '10%'}}>Создан</th>
                    <th scope='col' style={{'width': '10%'}}>Обновлен</th>
                    <th scope='col' style={{'width': '5%'}}>Опубликован</th>
                </tr>
                </thead>
                <tbody>
                {projectNotes.map((note) => {
                    let author = users?.find((user) => user.id === note.author);
                    return <ProjectNoteItem key={note.id} author={author} note={note}/>;
                })}
                </tbody>
            </table>
        </div>
    )
};

export default ProjectNotesList;
