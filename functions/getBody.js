export const getBody = (debtor) => {
  return `
    <h3>ESTE ES UN MAIL AUTOMATICO.</h3>
    <p>Nos comunicamos desde Sinapsis Srl</p>
    <h4>Cliente: ${debtor.nombre}</h4>
    <p>El <b>saldo</b> de la cuenta es de: <strong>$${debtor.saldo}</strong></p>
    <p>Se <b>adjunta</b> resumen de cuenta.</p>
    <strong>Tuvimos un inconveniente con el sistema a principios de agosto.</strong>
    <p>Los comprobantes de los meses de junio, julio y primeros dias de agosto (hasta el dia 2) no van a coincidir con los resumenes anteriores</p>
    <p>Cualquier duda o consulta podes responder este mail.</p>
    <p>Saludos coordiales</p>
    <br/><br/><br/>
    <table
    id="zs-output-sig"
    border="0"
    cellpadding="0"
    cellspacing="0"
    style="
      font-family: Arial, Helvetica, sans-serif;
      line-height: 0px;
      font-size: 1px;
      padding: 0px !important;
      border-spacing: 0px;
      margin: 0px;
      border-collapse: collapse;
      width: 500px;
    "
  >
    <tbody>
      <tr>
        <td style="padding: 0px !important">
          <table
            id="inner-table"
            border="0"
            cellpadding="0"
            cellspacing="0"
            style="
              font-family: Arial, Helvetica, sans-serif;
              line-height: 0px;
              font-size: 1px;
              padding: 0px !important;
              border-spacing: 0px;
              margin: 0px;
              border-collapse: collapse;
            "
          >
            <tbody>
              <tr>
                <td width="253" style="padding-right: 18px">
                  <table
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    style="
                      font-family: Arial, Helvetica, sans-serif;
                      line-height: 0px;
                      font-size: 1px;
                      padding: 0px !important;
                      border-spacing: 0px;
                      margin: 0px auto;
                      border-collapse: collapse;
                    "
                  >
                    <tbody>
                      <tr>
                        <td
                          style="
                            border-collapse: collapse;
                            line-height: 0px;
                            padding-bottom: 20px;
                            padding-right: 1px;
                          "
                        >
                          <p style="margin: 0.04px">
                            <img
                              height="auto"
                              width="200"
                              alt="image"
                              border="0"
                              src="https://img2.gimm.io/3cdc658d-d569-4485-a486-dec07fad03f1/-/resize/506x132/img.png"
                            />
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <table
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    style="
                      font-family: Arial, Helvetica, sans-serif;
                      line-height: 0px;
                      font-size: 1px;
                      padding: 0px !important;
                      border-spacing: 0px;
                      margin: 0px auto;
                      border-collapse: collapse;
                    "
                  >
                    <tbody>
                      <tr>
                        <td style="padding-right: 10px">
                          <p style="margin: 0.04px">
                            <a
                              style="font-size: 0px; line-height: 0px"
                              target="_blank"
                              rel="nofollow"
                              href="https://www.facebook.com/facesinapsis"
                              ><img
                                height="24"
                                width="24"
                                alt="facebook"
                                border="0"
                                src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                            /></a>
                          </p>
                        </td>
                        <td style="padding-right: 10px">
                          <p style="margin: 0.04px">
                            <a
                              style="font-size: 0px; line-height: 0px"
                              target="_blank"
                              rel="nofollow"
                              href="https://www.instagram.com/sinapsis_sl/"
                              ><img
                                height="24"
                                width="24"
                                alt="instagram"
                                border="0"
                                src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                            /></a>
                          </p>
                        </td>
                        <td style="padding-right: 10px">
                          <p style="margin: 0.04px">
                            <a
                              style="font-size: 0px; line-height: 0px"
                              target="_blank"
                              rel="nofollow"
                              href="https://goo.gl/maps/4JfV9WJgf4WjaAoP6"
                              ><img
                                height="24"
                                width="24"
                                alt="maps"
                                border="0"
                                src="https://cdn-icons-png.flaticon.com/512/1865/1865269.png"
                            /></a>
                          </p>
                        </td>
                        <td style="padding: 0px !important">
                          <p style="margin: 0.04px">
                            <a
                              style="font-size: 0px; line-height: 0px"
                              target="_blank"
                              rel="nofollow"
                              href="https://wa.me/+543476309819/"
                              ><img
                                height="24"
                                width="24"
                                alt="whatsapp"
                                border="0"
                                src="https://cdn-icons-png.flaticon.com/512/5968/5968841.png"
                            /></a>
                          </p>
                        </td>
                        <td style="padding: 0px !important"></td>
                      </tr>
                      <tr>
                        <td
                          style="
                            border-collapse: collapse;
                            padding-bottom: 8px;
                          "
                        ></td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                <td style="padding: 0px !important">
                  <table
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    style="
                      font-family: Arial, Helvetica, sans-serif;
                      line-height: 0px;
                      font-size: 1px;
                      padding: 0px !important;
                      border-spacing: 0px;
                      margin: 0px;
                      border-collapse: collapse;
                    "
                  >
                    <tbody>
                      <tr>
                        <td
                          style="
                            border-collapse: collapse;
                            font-family: Tahoma, Geneva, sans-serif;
                            font-size: 14px;
                            font-style: normal;
                            line-height: 16px;
                            font-weight: 700;
                            padding-bottom: 6px;
                          "
                        >
                          <p style="margin: 0.04px">
                            <span
                              style="
                                font-family: Tahoma, Geneva, sans-serif;
                                font-size: 14px;
                                font-style: normal;
                                line-height: 16px;
                                font-weight: 700;
                                color: #0482b7;
                                display: inline;
                              "
                              >Administración&nbsp;</span
                            >
                            <span
                              style="
                                font-family: Tahoma, Geneva, sans-serif;
                                font-size: 14px;
                                font-style: normal;
                                line-height: 16px;
                                font-weight: 400;
                                color: #8b8b8b;
                                display: inline;
                              "
                              >Comprobantes&nbsp;</span
                            >
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    style="
                      font-family: Arial, Helvetica, sans-serif;
                      line-height: 0px;
                      font-size: 1px;
                      padding: 0px !important;
                      border-spacing: 0px;
                      margin: 0px;
                      border-collapse: collapse;
                    "
                  >
                    <tbody>
                      <tr>
                        <td
                          style="
                            border-collapse: collapse;
                            font-family: Tahoma, Geneva, sans-serif;
                            font-size: 14px;
                            font-style: normal;
                            line-height: 16px;
                            font-weight: 400;
                            padding-bottom: 6px;
                          "
                        >
                          <p style="margin: 0.04px">
                            <span
                              style="
                                font-family: Tahoma, Geneva, sans-serif;
                                font-size: 14px;
                                font-style: normal;
                                line-height: 16px;
                                font-weight: 400;
                                color: #8b8b8b;
                                display: inline;
                              "
                            >
                              <a
                                href="https://sinapsis.com.ar/"
                                target="_blank"
                                style="text-decoration: none"
                              >
                                sinapsis.com.ar
                              </a>
                            </span>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td
                          style="
                            border-collapse: collapse;
                            font-family: Tahoma, Geneva, sans-serif;
                            font-size: 14px;
                            font-style: normal;
                            line-height: 16px;
                            font-weight: 400;
                            padding-bottom: 6px;
                          "
                        >
                          <p style="margin: 0.04px">
                            <span
                              style="
                                font-family: Tahoma, Geneva, sans-serif;
                                font-size: 14px;
                                font-style: normal;
                                line-height: 16px;
                                font-weight: 400;
                                color: #8b8b8b;
                                display: inline;
                              "
                              >3476 431222</span
                            >
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td
                          style="
                            border-collapse: collapse;
                            font-family: Tahoma, Geneva, sans-serif;
                            font-size: 14px;
                            font-style: normal;
                            line-height: 16px;
                            font-weight: 400;
                            padding-bottom: 6px;
                          "
                        >
                          <p style="margin: 0.04px">
                            <span
                              style="
                                font-family: Tahoma, Geneva, sans-serif;
                                font-size: 14px;
                                font-style: normal;
                                line-height: 16px;
                                font-weight: 400;
                                color: #8b8b8b;
                                display: inline;
                              "
                              >CBU: 0340379000379001926007
                            </span>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td
                          style="
                            border-collapse: collapse;
                            font-family: Tahoma, Geneva, sans-serif;
                            font-size: 14px;
                            font-style: normal;
                            line-height: 16px;
                            font-weight: 400;
                            padding-bottom: 6px;
                          "
                        >
                          <p style="margin: 0.04px">
                            <span
                              style="
                                font-family: Tahoma, Geneva, sans-serif;
                                font-size: 14px;
                                font-style: normal;
                                line-height: 16px;
                                font-weight: 400;
                                color: #8b8b8b;
                                display: inline;
                              "
                              >Alias: sinapsissrl
                            </span>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td
                          style="
                            border-collapse: collapse;
                            font-family: Tahoma, Geneva, sans-serif;
                            font-size: 14px;
                            font-style: normal;
                            line-height: 16px;
                            font-weight: 400;
                            padding-bottom: 6px;
                          "
                        >
                          <p style="margin: 0.04px">
                            <span
                              style="
                                font-family: Tahoma, Geneva, sans-serif;
                                font-size: 14px;
                                font-style: normal;
                                line-height: 16px;
                                font-weight: 400;
                                color: #8b8b8b;
                                display: inline;
                              "
                              >CUIT: 30711382891
                            </span>
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
  `;
};
