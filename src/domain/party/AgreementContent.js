
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {AgreementType} from '../party/Agreement.js';
import {AgreementContentTypeType} from '../party/AgreementContentType.js';
import {ContentType} from '../content/Content.js';


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
    




const AgreementContentInputType = new GraphQLInputObjectType({
  name: 'AgreementContentInputType',
  description: 'input type for AgreementContent in party',

  fields: () => ({
    fromDate: {type: GraphQLString},
    agreementId: {type: GraphQLString},
    contentId: {type: GraphQLString},
    agreementItemSeqId: {type: GraphQLString},
    agreementContentTypeId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {AgreementContentInputType};
    