import { ServerResponse } from "http";

function sendJson(res: ServerResponse, sattusCode: number, data: any) {
    res.writeHead(sattusCode, { "content-type": "application/json" });
    res.end(JSON.stringify(data));
};

export default sendJson;