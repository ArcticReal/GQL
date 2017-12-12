import {
  GraphQLList,
  GraphQLString,
} from 'graphql';

import { VerifyType, ResendVerificationType } from '../../loginServices/verification.js';

const verificationQueries = {
  verify: {
    type: VerifyType,
    args: {
      hash: {
        type: GraphQLString
      }
    },
    resolve: (root, args, {loaders}) => loaders.ofbiz.load(`account/verify/${args.hash}`)
  },
  resendVerification: {
    type: ResendVerificationType,
    args: {
      hash: {
        type: GraphQLString
      }
    },
    resolve: (root, args, {loaders}) => loaders.ofbiz.load(`resendVerificationMail/${args.hash}`)
  }
};

export {verificationQueries};
