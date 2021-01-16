import React from "react"

import { Row, Col, Card, CardBody, CardTitle } from "reactstrap"
import { Link } from "react-router-dom"

import ApexRadial from "./ApexRadial"

const MonthlyEarning = () => {
  return (
    <React.Fragment>
      {" "}
      <Card>
        <CardBody className='pt-0 pb-0'>
          <Row >
            <Col sm="6" className='mt-4'>
              <p className="text-muted">Энэ сар нэмэгдсэн орлого</p>
              <h3>100000</h3>
              <p className="text-muted">
				  Өмнөх үзүүлэлтээс
                <span className="text-success mr-2">
                  {" "}
                  12% <i className="mdi mdi-arrow-up"></i>{" "}
                </span>{" "}
              </p>
              <div className="mt-4">
              </div>
            </Col>
            <Col sm="6">
              <div className="mt-4 mt-sm-0">
                <ApexRadial />
              </div>
            </Col>
          </Row>

          <Row >
            <Col sm="6" className='mt-4'>
              <p className="text-muted">Энэ сар нэмэгдсэн тоглогчид</p>
              <h3>1000</h3>
              <p className="text-muted">
				  Өмнөх үзүүлэлтээс
                <span className="text-success mr-2">
                  {" "}
                  12% <i className="mdi mdi-arrow-up"></i>{" "}
                </span>{" "}
              </p>
              <div className="mt-4">
              </div>
            </Col>
            <Col sm="6">
              <div className="mt-4 mt-sm-0">
                <ApexRadial />
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </React.Fragment>
  )
}

export default MonthlyEarning
