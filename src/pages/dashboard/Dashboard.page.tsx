import React, { Fragment, useEffect } from 'react';

import './Dashboard.style.scss';
import { IDashboardProps } from './Dashboard.interface';
import { connector } from './Dashboard.service';
import { CategoryComponent } from './../../components/category/Category.component';
import { AddButtonComponent } from './../../components/addButton/AddButton.component';
import { ModalComponent } from './../../components/modal/Modal.component';
import { TaskComponent } from '../../components/task/Task.component';

export const DashboardComponent = connector((props: IDashboardProps) => {
    useEffect(() => {
        props.addCategoriesListener();
        props.addTodosListener();

        return () => {
            props.removeCategoriesListener();
            props.removeTodosListener();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const categoryCreating = (title: React.ReactText) => {
        props.createCategory(title);
    };

    return (
        <Fragment>
            <div className="row dashboard">
                {props.categoryState.categoriesList.map((category) => (
                    <CategoryComponent key={category.id} categoryId={category.id} categoryTitle={category.title} />
                ))}

                <div className="col s12 m3 category__item">
                    <AddButtonComponent text={'Create Category'} placeholder={'Enter Title'} onCreate={categoryCreating} />
                </div>
            </div>

            <ModalComponent>
                <TaskComponent />
            </ModalComponent>
        </Fragment>
    );
});
