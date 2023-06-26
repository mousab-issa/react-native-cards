import { useState } from "react";

const base64 = require("base-64");
const pkgConfig = require("../../package.json");

const vaultEndpoint = "https://vault.omise.co/";
const apiEndpoint = "https://api.omise.co/";

export const useOmise = () => {
  const [_publicKey, setPublicKey] = useState<string | null>(null);
  const [_apiVersion, setApiVersion] = useState<string>("2015-11-17");

  const config = (publicKey: string, apiVersion: string = "2019-05-29") => {
    setPublicKey(publicKey);
    setApiVersion(apiVersion);
  };

  const getHeaders = () => {
    let headers: { [key: string]: string } = {
      Authorization: "Basic " + base64.encode(_publicKey + ":"),
      "User-Agent": pkgConfig.name + "/" + pkgConfig.version,
      "Content-Type": "application/json",
    };

    if (_apiVersion && _apiVersion !== "") {
      headers["Omise-Version"] = _apiVersion;
    }

    return headers;
  };

  const createToken = async (data: any) => {
    const tokenEndpoint = vaultEndpoint + "tokens";
    let headers = getHeaders();

    if (!_publicKey || _publicKey === "") {
      throw new Error("Please config your public key");
    }

    const response = await fetch(tokenEndpoint, {
      method: "POST",
      cache: "no-cache",
      headers: headers,
      body: JSON.stringify(data),
    });

    if (response.ok && response.status === 200) {
      return response.json();
    } else {
      console.log("response not ok", response);
      throw response.json();
    }
  };

  const createSource = async (data: any) => {
    const sourceEndpoint = apiEndpoint + "sources";
    let headers = getHeaders();

    if (!_publicKey || _publicKey === "") {
      throw new Error("Please config your public key");
    }

    const response = await fetch(sourceEndpoint, {
      method: "POST",
      cache: "no-cache",
      headers: headers,
      body: JSON.stringify(data),
    });

    if (response.ok && response.status === 200) {
      return response.json();
    } else {
      console.log("response not ok", response);
      throw response.json();
    }
  };

  const getCapabilities = async () => {
    const sourceEndpoint = apiEndpoint + "capability";
    let headers = getHeaders();

    if (!_publicKey || _publicKey === "") {
      throw new Error("Please config your public key");
    }

    const response = await fetch(sourceEndpoint, {
      method: "GET",
      cache: "no-cache",
      headers: headers,
    });

    if (response.ok && response.status === 200) {
      return response.json();
    } else {
      console.log("response not ok", response);
      throw response.json();
    }
  };

  return {
    config,
    createToken,
    createSource,
    getCapabilities,
  };
};
