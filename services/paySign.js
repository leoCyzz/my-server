const RSASign = require('jsrsasign');
const buffer = require('buffer');
const Buffer = buffer.Buffer;
const privateKey = `-----BEGIN PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCEwBroRZvYL8q3Wx25QBrab2SEJj3FpaBpbsRmBIc17WaxSyMS5pqdSY1EPplD8EpIqapxEXeOtIEk4hgaBALTd9A06i4JpM8nhHo+0awrASF3VNpXK7seQfzOiASOj4IonbJUWqbgBWR1964G7zQ55SVW7+yQ2ljQHzZmvuZJ4nYq/nKcrJolLnMCVD2gKWFFciLlUPjAEV2wCTpcjpsazBcndMhM1UCXDPdVSCnhd2p6cO+krtPzQ82k33Mht64idpOJw3TYncTw4KTCCvRm4ti6Z/JpgIodSCJCeBRqL5yZtSg5B/dWby3Ov/s8aDzhxAQeaZIC/bOfH0LO4CGjAgMBAAECggEAbkjikcDyngHmWbm60eIt7PbJ/PeALilRQQYi59YvNmAKBpSziMpH/Q/T6rROxCBmtkMuNE0clFPlTmz/NO3MIz7QnIVIxf5Dk0L+BB5Q+FEyKl82HWFZTOPpUPOzRXR336JTOr0tEcOpGFAyJdSoAMkb4kPkttqPGig0G9vQmeP0QiB5X3eGbZBhTnqB+Fh8bEt5Kg8mpyuJX3bLhz3aS/jtfn3kQlzDStYW+8tOffzNdaKSetAsJjGMK6SaurUlelInd9e05XMeLXAC0FC735CT76dOl+hPaBL8ETz2OscFkeZIf9JGKUxukiqePpheZckd2MCI++5IosW39sGN4QKBgQDKU6Tm8dJEessoHgu9JcuZ4AwOQA/sZhDNiWVJS4rMGzKAsj898sQ6VuxDYivbHPK2fmopMu24aoYvWYq/XGXVQ0JlHBJaEDer8tKSpNNylnQ6ls/JTA/y4FItssWo75YHlGRKkRLUE/QQY2YBAGihGEBO9NeF9L7tstgSwgAT6wKBgQCn92nRB7roV1Rfvs9U5Y7pAtQWyEqNWgBVuGh6CGdlqsplYc/c5bVUV3Yllfu2dRjadBNM7mFHNo/samDs6V14KmOYrDsmLL8w7CibbVR9Hsq9ZW8cnvuEOzDl0xIH6Z2O7DopxSJLgChhezgycdUZQIpzsZN34xD7ugNV8geTKQKBgFbA+NNB21wbnuLLx1LKUvve0qyFkY5W0VugTzrXVmNgQg5m37ErWDJ/tPzLqmxghD32BIU33jCWFIVXCqQ09UE1ftGl8MSHcaecDehtHnFiy+GXau8wWyJUR0hrAFAIszb6zOogPIeNKrigNku1pid1I5X3bDZ3FCsN5ZJddvUTAoGAMVAxT/5uAJLLIcUah/lRqNV8wSeSw8c9u+0FN3bKLI4lF/jMlzUVtKps9IIBQcNFRbW4iOifxNGfFbDxvfyRxZrkXMmMIBwZEdrz3RYPLSDiMxLZuVRv0ZWzOHZsn8gVywVN2j+XXwVEVcJgcGb9QomxXGAxRIx0ywMEwbHqSWkCgYEAijnM3+Ci29Qti76Q6Q7TAEv+lE6TaO7BtU/gIHArwwP2A6oiNpeNRzagV0y8X3pfFYH5L17zvR4RyGwj2SSjRejNzy9IiqdPJeFtPzqMF5KNPqF73OF/tMDt3aUCeJCvwaHX8q3Ij/M9aUsNo1F2bGFbW9UKSiSRdj4N59CZnDU=
-----END PRIVATE KEY-----`;

const PaySign = {};


PaySign.aliSign = (object) => {
  // Add default sign_type
  if (!object.sign_type || object.sign_type.length === 0) {
    object.sign_type = 'RSA';
  }

  // Remove sign field
  delete object.sign;

  // Remove empty field
  Object.keys(object).forEach((key) => {
    if (String(object[key]).length === 0) {
      delete object[key];
    }
  })

  // Sort query string
  var sortedQuery = '';
  let sortedKeys = Object.keys(object).sort((a, b) => a > b);
  for (var i = 0; i < sortedKeys.length; i++) {
    let key = sortedKeys[i];
    let value = object[key];
    sortedQuery += `${(i === 0) ? '' : '&'}${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
  }

  // Create signature
  let alg = {RSA: 'SHA1withRSA', RSA2: 'SHA256withRSA'}[object.sign_type];
  let sig = new RSASign.KJUR.crypto.Signature({alg});
  const key = RSASign.KEYUTIL.getKey(privateKey);
  sig.init(key);
  sig.updateString(sortedQuery);
  let sign = Buffer.from(sig.sign(), 'hex').toString('base64');

  sortedQuery += `&sign=${encodeURIComponent(sign)}`;
  return sortedQuery;
}

module.exports = PaySign;