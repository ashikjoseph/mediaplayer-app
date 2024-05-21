import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { addCategory, deleteCategory, getAllCategory, getVideoDetailsByID, updateCategory } from '../services/allAPI';
import Videocard from './Videocard';

function Category() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [categoryName, setCategoryName] = useState();
    const [allCategory, setAllCategory] = useState([]);

    const handleAddcategory = async () => {
        if (categoryName) {
            let body = {
                categoryName: categoryName,
                allVideos: []
            }
            const response = await addCategory(body);
            if (response.status === 201) {
                toast.success(`Successfully added the category ${categoryName}`);
                setCategoryName("");
                handleClose();
                getAllCat();
            }
            else {
                toast.error("Something went wrong");
            }
        }
        else {
            toast.warn("Please enter a category name");
        }
    }

    const getAllCat = async () => {
        const response = await getAllCategory();
        const { data } = response;
        setAllCategory(data);
    }

    useEffect(() => {
        getAllCat();
    }, []);

    const handleDelete = async (id) => {
        await deleteCategory(id);
        getAllCat();
    }

    const dragOver = (e) => {
        e.preventDefault();
    }

    const videoDrop = async (e, categoryID) => {
        const videoid = e.dataTransfer.getData("videoID");
        const res = await getVideoDetailsByID(videoid);
        const { data } = res;
        let selectedCategory = allCategory?.find((item) => item.id === categoryID);
        selectedCategory.allVideos.push(data);
        const result = await updateCategory(categoryID, selectedCategory);
        if (result.status === 200) {
            getAllCat();
        }
    }

    const removeVideoFromCategory = async (categoryId, videoId) => {
        try {
            const updatedCategories = allCategory.map(category => {
                if (category.id === categoryId) {
                    return {
                        ...category,
                        allVideos: category.allVideos.filter(video => video.id !== videoId)
                    };
                }
                return category;
            });

            const response = await updateCategory(categoryId, updatedCategories.find(category => category.id === categoryId));
            if (response.status === 200) {
                setAllCategory(updatedCategories);
                toast.success(`Video removed from category successfully.`);
            } else {
                toast.error(`Failed to remove video from category.`);
            }
        } catch (error) {
            console.error("Error removing video from category:", error);
            toast.error(`Error removing video from category: ${error.message}`);
        }
    }

    return (
        <>
            <div style={{ marginLeft: "380px" }}>
                <button className='btn btn-warning' onClick={handleShow}>Add New Category</button>
            </div>
            <div style={{ marginLeft: "250px" }} >
                {
                    allCategory.length > 0 ?
                        allCategory.map(item => (
                            <div key={item.id} className='m-5 border border-secondary rounded p-3 ' droppable="true" onDragOver={(e) => dragOver(e)} onDrop={(e) => videoDrop(e, item?.id)}>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <h6>{item.categoryName}</h6>
                                    <button className='btn btn-danger ms-3' onClick={() => handleDelete(item.id)}>
                                        <i className='fa-solid fa-trash'></i>
                                    </button>
                                </div>
                                <div className='border border-secondary rounded mt-3'>
                                    <div className='d-flex flex-wrap '>
                                        {item.allVideos.map(video => (
                                            <div key={video.id} className="video-card p-3">
                                                <Videocard displayVideo={video} />
                                                <div className='pt-3'>
                                                    <button onClick={() => removeVideoFromCategory(item.id, video.id)} className='btn border '>
                                                        <i className='fa-solid fa-trash' ></i>
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))
                        :
                        <p style={{marginLeft:"130px", marginTop:"50px"}}>No categories to display</p>
                }
            </div>


            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title><i className="fa-solid fa-list text-warning me-3"></i>
                        Add Category
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Please fill the form </p>
                    <Form className='border border-secondary p-3 rounded'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Enter Category Name" onChange={(e) => setCategoryName(e.target.value)} color='black'/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" className='btn-warning' onClick={handleAddcategory}>Add</Button>
                </Modal.Footer>
            </Modal>
            <ToastContainer position='top-center' theme='dark'></ToastContainer>
        </>
    )
}

export default Category;
