
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {AgreementTermType} from '../party/AgreementTermType.js';


const AgreementTermAttributeType = new GraphQLObjectType({
  name: 'AgreementTermAttributeType',
  description: 'Type for AgreementTermAttribute in party',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    agreementTerm: {
      type: AgreementTermType,
      args : {agreementTermId: {type: GraphQLString}},
      resolve: (agreementTermAttribute, args, {loaders}) => loaders.ofbiz.load(`agreementTerms/find?agreementTermId=${agreementTermAttribute.agreementTermId}`)
    },
    attrName: {type: GraphQLString}
  })
});

export {AgreementTermAttributeType};
    