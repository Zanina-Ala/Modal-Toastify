
import React from 'react';
import { Modal as BootstrapModal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

interface ModalProps {
  onClose: () => void;
  courses: {
    id: number;
    title: string;
    price: number;
    duration: string;
    description: string;
    isAdded: boolean;
  }[];
  onToggleCourse: (courseId: number, type: 'add' | 'remove') => void;
}

const Modal: React.FC<ModalProps> = ({ onClose, courses, onToggleCourse }) => {
  const addedCourses = courses.filter((course) => course.isAdded);

  return (
    <BootstrapModal show onHide={onClose}>
      <BootstrapModal.Header closeButton>
        <BootstrapModal.Title>Added Courses Information</BootstrapModal.Title>
      </BootstrapModal.Header>
      <BootstrapModal.Body>
        <table className="table table-bordered">
          <thead className="thead-light">
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Price</th>
              <th>Duration</th>
              <th>Description</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {addedCourses.map((course) => (
              <tr key={course.id}>
                <td>{course.id}</td>
                <td>{course.title}</td>
                <td>${course.price}</td>
                <td>{course.duration}</td>
                <td>{course.description}</td>
                <td style={{ textAlign: 'center' }}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: '100%',
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faTrashAlt} 
                      className="text-danger"
                      onClick={() => onToggleCourse(course.id, 'remove')}
                      style={{ cursor: 'pointer' }}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </BootstrapModal.Body>
      <BootstrapModal.Footer>
        <button className="btn btn-secondary" onClick={onClose}>
          Close
        </button>
      </BootstrapModal.Footer>
    </BootstrapModal>
  );
};

export default Modal;
