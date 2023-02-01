import React, { useState } from "react";
import { i18n } from "src/i18n";
import { BsEnvelope } from "react-icons/bs";
import { Button, Modal } from "antd";
function NewsLettre() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const langue = localStorage.getItem("language");

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="app__newsLettre">
      <div className="newsLettre">
        <div className="newsLettre__right">
          <div className="archieve__header">
            <h2>{i18n("common.newsletter")}</h2>
            <div className="satestique__bar" />
          </div>
          <div className="newsLettre__content">
            <div className="newsLettere__detaill">
              {i18n("common.newsletterText")}
            </div>

            <div className="newsLettre__formulaire">
              <div className="button__newLettre" onClick={() => showModal()}>
                {i18n("common.subscribe")}
              </div>
            </div>
          </div>
          <Modal
            title={i18n("common.newsletter")}
            bodyStyle={{
              backgroundColor: "#2b2840",
              borderRadius: 10,
              // opacity: "0.9",
            }}
            centered
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={[<></>, <></>]}
          >
            <div>
              {langue === "fr" ? (
                <iframe
                  width="600"
                  height="500"
                  src="https://7769b14e.sibforms.com/serve/MUIEAP4qjttO0J3M51ue3FqRBO9Rdhzrcxl-s1VA97mv9TPCo_4BIaFVWj8kRgz0tvsKDPNut3C6OeR853jO2w8TJVYR7VCuSyvQskO9iQqLl29yBmmOw1Lx1kAnwDDdeeUb8kpycbStDMkmTrDqNLuax-Vlkv6Hm4990ytfKw8oabsGXKlTQvghbeRn9RTmJLu_tZiABQQnh49z%22"
                  frameBorder="0"
                  scrolling="auto"
                  allowFullScreen
                  style={{
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    maxWidth: "100%",
                  }}
                ></iframe>
              ) : (
                <iframe
                  width="600"
                  height="500"
                  src="https://7769b14e.sibforms.com/serve/MUIEAEIzwfYu0hEi4kJWWiU_9wlrHd0GiTtxRlIodQ9wZ3DA4souMRigsayeh4c5MJuVg1ZCvBaAMJDMT2F79XF48KkAocyWhgoFQvRQgczTzzSkBGjVmP5F6NPiWF-kJXCdvitgfm5s6p2Dk5sll55pyUrso7-pL1WKDZbYk3bbcg3-7pNOfequX9tHk8qcd56fazCsrfLSnqPa%22"
                  frameBorder="0"
                  scrolling="auto"
                  allowFullScreen
                  style={{
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    maxWidth: "100%",
                  }}
                ></iframe>
              )}
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default NewsLettre;
