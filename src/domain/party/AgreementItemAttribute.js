
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

import {AgreementItemType} from '../party/AgreementItem.js';


const AgreementItemAttributeType = new GraphQLObjectType({
  name: 'AgreementItemAttributeType',
  description: 'Type for AgreementItemAttribute in party',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    agreement: {
      type: AgreementItemType,
      args : {agreementId: {type: GraphQLString}},
      resolve: (agreementItemAttribute, args, {loaders}) => loaders.ofbiz.load(`party/agreement/agreementItems/find?agreementId=${agreementItemAttribute.agreementId}`)
    },
    agreementItemSeqId: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    attrName: {type: GraphQLString}
  })
});

export {AgreementItemAttributeType};
    




const AgreementItemAttributeInputType = new GraphQLInputObjectType({
  name: 'AgreementItemAttributeInputType',
  description: 'input type for AgreementItemAttribute in party',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    agreementId: {type: GraphQLString},
    agreementItemSeqId: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    attrName: {type: GraphQLString}
  })
});

export {AgreementItemAttributeInputType};
    