import React, { useEffect, useState } from "react";
import { messages } from "../../utilities/messages";
import "./messages.css";
import { Link } from "react-router-dom";
import { BsFillEyeFill } from "react-icons/bs";
import { Table } from "react-bootstrap";
import NavBar from "../../components/NavBar/NavBar";
import { fetchApi } from "../../services/fetchApi";
import Pagination from "../../components/Pagination";
import moment from "moment";

const Messages = () => {
  const [messages, setMessages] = useState([]);

  const [isLoading, setisLoading] = useState(false);
  const [pageNum, setPageNum] = useState();
  const [page, setPages] = useState(1);

  const handlebutton = (type) => {
    if (type === "next") {
      setPages(page + 1);
    } else setPages(page - 1);

    window.scroll(0, 0);
  };

  useEffect(() => {
    const initializer = async () => {
      setisLoading(true);
      const data = await fetchApi(`messages?page=${page}`, "", " ", "GET", " ");
      setPageNum(data.pages);
      setMessages(data.messages);
      setisLoading(false);
    };
    initializer();
  }, [page]);

  return (
    <main>
      <NavBar />

      {isLoading ? (
        "loading"
      ) : (
        <section>
          <div className="message">
            <h2 className="message-header">All Messages</h2>
            <Table hover variant="light">
              <thead className="text-dark">
                <tr>
                  <th>Name</th>
                  <th>Subject</th>
                  <th>Date</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                {messages.map((singleMessage) => {
                  return (
                    <tr key={singleMessage.message_id}>
                      <td>{singleMessage.name}</td>
                      <td>{singleMessage.subject}</td>
                      <td>{moment(singleMessage.createdAt).calendar()}</td>
                      <td>
                        <Link to={`/messages/${singleMessage.message_id}`}>
                          <BsFillEyeFill
                            style={{
                              color: "white",
                              marginLeft: "10px",
                              fontSize: "17px",
                            }}
                            className="text-info"
                          />
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
          <Pagination
            page={page}
            handlebutton={handlebutton}
            pageNum={pageNum}
          />
        </section>
      )}
    </main>
  );
};

export default Messages;
