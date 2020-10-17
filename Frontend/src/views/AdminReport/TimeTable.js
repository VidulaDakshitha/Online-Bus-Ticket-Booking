import React from "react";
import {Card, CardBody, CardHeader, Col, Row, Table} from "reactstrap";

function TimeTable() {

  return <div>
    <Row>
      <Col xs="12" sm="12">
        <Card >
          <CardHeader className="primary-bg"><h3>Timetable</h3></CardHeader>
          <CardBody>


            <Table size="sm" className="mt-3" responsive>

              <thead>
              <tr>
                <th>From</th>
                <th>To</th>
                <th>Start</th>
                <th>End</th>
              </tr>
              </thead>


                  <tbody>
                  <tr>
                    <td>Moratuwa</td>
                    <td>Colombo</td>
                    <td>7:00 AM</td>
                    <td>9:00 AM</td>
                  </tr>

                  <tr>
                   <td>Moratuwa</td>
                    <td>Colombo</td>
                    <td>10:00 AM</td>
                    <td>12:00 AM</td>
                  </tr>

                  <tr>
                    <td>Moratuwa</td>
                    <td>Colombo</td>
                    <td>1:00 AM</td>
                    <td>3:00 AM</td>
                  </tr>


                  <tr>
                   <td>Moratuwa</td>
                    <td>Colombo</td>
                    <td>4:00 AM</td>
                    <td>6:00 AM</td>
                  </tr>


                  <tr>
                   <td>Moratuwa</td>
                    <td>Colombo</td>
                    <td>7:00 AM</td>
                    <td>9:00 AM</td>
                  </tr>


                  <tr>
                   <td>Colombo</td>
                    <td>Moratuwa</td>
                    <td>10:00 AM</td>
                    <td>12:00 AM</td>
                  </tr>

                  <tr>
                    <td>Colombo</td>
                    <td>Moratuwa</td>
                    <td>1:00 AM</td>
                    <td>3:00 AM</td>
                  </tr>


                  <tr>
                    <td>Colombo</td>
                    <td>Moratuwa</td>
                    <td>4:00 AM</td>
                    <td>6:00 AM</td>
                  </tr>

                  </tbody>

            </Table>
          </CardBody>
        </Card>


      </Col>
    </Row>
  </div>
}export default TimeTable;
