import React, { FC } from 'react';

import { Col, Container, Row } from 'react-bootstrap';

export const Home: FC<HomeType> = () => (
  <Container>
    <Row>
      <Col xs={12} className="mb-5">
        <h2>Отклик на вакансию</h2>
        <a
          href="https://rabota.by/vacancy/54219846?hhtmFrom=vacancy_response"
          target="_blank"
          rel="noreferrer"
        >
          Junior Frontend Developer (React)
        </a>
      </Col>
      <Col xs={12} className="mb-3">
        <h5>
          Отборочное задание для соискателей на позицию Junior Frontend developer (React).
        </h5>
      </Col>
      <Col xs={12} className="mb-3">
        <h6>Необходимо реализовать SPA (single page application) на React.</h6>
        <p>Ключевые технологии, которые необходимо использовать</p>
        <ul>
          <li>React</li>
          <li>React-bootstrap</li>
          <li>React-router</li>
          <li>Axios</li>
          <li>Redux</li>
          <li>Redux-saga</li>
          <li>Git (!)</li>
        </ul>
      </Col>
      <Col>
        <h6>Описание задачи</h6>
        <p>Нужно создать сайт-галерею, где будут присутствовать 3 страницы (роута):</p>
        <ul>
          <li>«Галерея» (главная страница), где будут располагаться картинки.</li>
          <li>«Обо мне», где будет располагаться краткая информация о Вас.</li>
          <li>
            Подробности о картинке (куда необходимо вывести поля краткую информацию о
            картинке – заголовок, id, ссылка)
          </li>
        </ul>
        <p>
          Получить данные о картинках необходимо через фейковое api
          https://jsonplaceholder.typicode.com, ресурс - /photos (или аналогичные api на
          Ваше усмотрение).
        </p>
      </Col>
    </Row>
  </Container>
);

type HomeType = {};
