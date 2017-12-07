
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {AgreementType} from '../party/AgreementType.js';
import {AgreementContentTypeType} from '../party/AgreementContentTypeType.js';
import {ContentType} from '../content/ContentType.js';


const AgreementContentType = new GraphQLObjectType({
  name: 'AgreementContentType',
  description: 'Type for AgreementContent in party',

  fields: () => ({
    fromDate: {type: GraphQLString},
    agreement: {
      type: AgreementType,
      args : {agreementId: {type: GraphQLString}},
      resolve: (agreementContent, args, {loaders}) => loaders.ofbiz.load(`agreements/find?agreementId=${agreementContent.agreementId}`)
    },
    content: {
      type: ContentType,
      args : {contentId: {type: GraphQLString}},
      resolve: (agreementContent, args, {loaders}) => loaders.ofbiz.load(`contents/find?contentId=${agreementContent.contentId}`)
    },
    agreementItemSeqId: {type: GraphQLString},
    agreementContentType: {
      type: AgreementContentTypeType,
      args : {agreementContentTypeId: {type: GraphQLString}},
      resolve: (agreementContent, args, {loaders}) => loaders.ofbiz.load(`agreementContentTypes/find?agreementContentTypeId=${agreementContent.agreementContentTypeId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {AgreementContentType};
    