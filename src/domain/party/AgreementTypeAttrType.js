
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {AgreementTypeType} from '../party/AgreementTypeType.js';


const AgreementTypeAttrType = new GraphQLObjectType({
  name: 'AgreementTypeAttrType',
  description: 'Type for AgreementTypeAttr in party',

  fields: () => ({
    agreementType: {
      type: AgreementTypeType,
      args : {agreementTypeId: {type: GraphQLString}},
      resolve: (agreementTypeAttr, args, {loaders}) => loaders.ofbiz.load(`agreementTypes/find?agreementTypeId=${agreementTypeAttr.agreementTypeId}`)
    },
    description: {type: GraphQLString},
    attrName: {type: GraphQLString}
  })
});

export {AgreementTypeAttrType};
    