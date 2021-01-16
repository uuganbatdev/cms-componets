import React from "react"
import { Card, CardBody, CardTitle, Badge, Button } from "reactstrap"
import { Link } from "react-router-dom"

const LatestTranaction = () => {

  return (
    <React.Fragment>
      <Card className='mt-5 pt-5 px-4 w-50 mb-5' >
        <CardBody>
          <CardTitle className="mb-2">Сүүлд хийгдсэн гүйлгээ</CardTitle>
          <div className="table-responsive">
            <table className="table table-centered table-nowrap mb-0">
              <thead className="thead-light">
                <tr>
                  <th style={{ width: "20px" }}>
                  </th>
                  <th>Гүйлгээ дугаар</th>
                  <th>Гүйлгээ утга</th>
                  <th>Огноо</th>
                  <th>Мөнгөн дүн</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction, key) => (
                  <tr key={"_tr_" + key}>
                    <td>
                    </td>
                    <td>
                      <Link to="#" className="text-body font-weight-bold">
                        {" "}
                        {transaction.orderId}{" "}
                      </Link>{" "}
                    </td>
                    <td>{transaction.billingName}</td>
                    <td>{transaction.Date}</td>
                    <td>{transaction.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardBody>
      </Card>
    </React.Fragment>
  )
}

export default LatestTranaction
