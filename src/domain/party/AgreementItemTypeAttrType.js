
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {AgreementItemTypeType} from '../party/AgreementItemTypeType.js';


const AgreementItemTypeAttrType = new GraphQLObjectType({
  name: 'AgreementItemTypeAttrType',
  description: 'Type for AgreementItemTypeAttr in party',

  fields: () => ({
    description: {type: GraphQLString},
    agreementItemType: {
      type: AgreementItemTypeType,
      args : {agreementItemTypeId: {type: GraphQLString}},
      resolve: (agreementItemTypeAttr, args, {loaders}) => loaders.ofbiz.load(`agreementItemTypes/find?agreementItemTypeId=${agreementItemTypeAttr.agreementItemTypeId}`)
    },
    attrName: {type: GraphQLString}
  })
});

export {AgreementItemTypeAttrType};
    