
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

import {AgreementType} from '../../party/Agreement/AgreementType.js';
import {AgreementContentTypeType} from '../../party/AgreementContentType/AgreementContentTypeType.js';
import {ContentType} from '../../content/Content/ContentType.js';


const AgreementContentType = new GraphQLObjectType({
  name: 'AgreementContentType',
  description: 'Type for AgreementContent in party',

  fields: () => ({
    fromDate: {type: GraphQLString},
    agreement: {
      type: AgreementType,
      args : {agreementId: {type: GraphQLString}},
      resolve: (agreementContent, args, {loaders}) => loaders.ofbiz.load(`party/agreements/find?agreementId=${agreementContent.agreementId}`)
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
      resolve: (agreementContent, args, {loaders}) => loaders.ofbiz.load(`party/agreement/agreementContentTypes/find?agreementContentTypeId=${agreementContent.agreementContentTypeId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {AgreementContentType};
    