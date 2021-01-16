import PropTypes from 'prop-types'
import React, { useState } from "react"
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardBody,
  CardTitle,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Media,
  Table,
} from "reactstrap"
import { Link } from "react-router-dom"

//import Charts

// Pages Components
import LatestDepositAndWithdraw from "./LatestDepositAndWithdraw"

//Import Breadcrumb

//i18n
import { withTranslation } from "react-i18next"

const DepositWithdraw = props => {

  const transactions = [
    {
      id: "customCheck2",
      orderId: "#SK2540",
      billingName: "Neal Matthews",
      Date: "07 Oct, 2019",
      total: "$400",
      badgeClass: "success",
      paymentStatus: "Paid",
      methodIcon: "fa-cc-mastercard",
      paymentMethod: "Mastercard",
      link: "#",
    },
    {
      id: "customCheck3",
      orderId: "#SK2541",
      billingName: "Jamal Burnett",
      Date: "07 Oct, 2019",
      total: "$380",
      badgeClass: "danger",
      paymentStatus: "Chargeback",
      methodIcon: "fa-cc-visa",
      paymentMethod: "Visa",
      link: "#",
    },
    {
      id: "customCheck4",
      orderId: "#SK2542",
      billingName: "Juan Mitchell",
      Date: "06 Oct, 2019",
      total: "$384",
      badgeClass: "success",
      paymentStatus: "Paid",
      methodIcon: "fa-cc-paypal",
      paymentMethod: "Paypal",
      link: "#",
    },
    {
      id: "customCheck5",
      orderId: "#SK2543",
      billingName: "Barry Dick",
      Date: "05 Oct, 2019",
      total: "$412",
      badgeClass: "success",
      paymentStatus: "Paid",
      methodIcon: "fa-cc-mastercard",
      paymentMethod: "Mastercard",
      link: "#",
    },
    {
      id: "customCheck6",
      orderId: "#SK2544",
      billingName: "Ronald Taylor",
      Date: "04 Oct, 2019",
      total: "$404",
      badgeClass: "warning",
      paymentStatus: "Refund",
      methodIcon: "fa-cc-visa",
      paymentMethod: "Visa",
      link: "#",
    },
    {
      id: "customCheck7",
      orderId: "#SK2545",
      billingName: "Jacob Hunter",
      Date: "04 Oct, 2019",
      total: "$392",
      badgeClass: "success",
      paymentStatus: "Paid",
      methodIcon: "fa-cc-paypal",
      paymentMethod: "Paypal",
      link: "#",
    },
    {
      id: "customCheck7",
      orderId: "#SK2545",
      billingName: "Jacob Hunter",
      Date: "04 Oct, 2019",
      total: "$392",
      badgeClass: "success",
      paymentStatus: "Paid",
      methodIcon: "fa-cc-paypal",
      paymentMethod: "Paypal",
      link: "#",
    },
    {
      id: "customCheck7",
      orderId: "#SK2545",
      billingName: "Jacob Hunter",
      Date: "04 Oct, 2019",
      total: "$392",
      badgeClass: "success",
      paymentStatus: "Paid",
      methodIcon: "fa-cc-paypal",
      paymentMethod: "Paypal",
      link: "#",
    },
    {
      id: "customCheck7",
      orderId: "#SK2545",
      billingName: "Jacob Hunter",
      Date: "04 Oct, 2019",
      total: "$392",
      badgeClass: "success",
      paymentStatus: "Paid",
      methodIcon: "fa-cc-paypal",
      paymentMethod: "Paypal",
      link: "#",
    },
    {
      id: "customCheck7",
      orderId: "#SK2545",
      billingName: "Jacob Hunter",
      Date: "04 Oct, 2019",
      total: "$392",
      badgeClass: "success",
      paymentStatus: "Paid",
      methodIcon: "fa-cc-paypal",
      paymentMethod: "Paypal",
      link: "#",
    },
    {
      id: "customCheck7",
      orderId: "#SK2545",
      billingName: "Jacob Hunter",
      Date: "04 Oct, 2019",
      total: "$392",
      badgeClass: "success",
      paymentStatus: "Paid",
      methodIcon: "fa-cc-paypal",
      paymentMethod: "Paypal",
      link: "#",
    },
  ]
  return (
    <React.Fragment >
		<div className='w-100 d-flex'>
			<LatestDepositAndWithdraw 
				title={'Мөнгө оролт хүсэлт'} 
				transactions={transactions}
			/>
			<LatestDepositAndWithdraw 
				title={'Мөнгө гаралт хүсэлт'} 
				transactions={transactions}
			/>
		</div>
    </React.Fragment>
  )
}


export default withTranslation()(DepositWithdraw)
