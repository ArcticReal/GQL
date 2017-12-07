
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


const AgreementAttributeType = new GraphQLObjectType({
  name: 'AgreementAttributeType',
  description: 'Type for AgreementAttribute in party',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    agreement: {
      type: AgreementType,
      args : {agreementId: {type: GraphQLString}},
      resolve: (agreementAttribute, args, {loaders}) => loaders.ofbiz.load(`agreements/find?agreementId=${agreementAttribute.agreementId}`)
    },
    attrValue: {type: GraphQLInt},
    attrName: {type: GraphQLString}
  })
});

export {AgreementAttributeType};
    