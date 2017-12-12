
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


const AddendumType = new GraphQLObjectType({
  name: 'AddendumType',
  description: 'Type for Addendum in party',

  fields: () => ({
    addendumEffectiveDate: {type: GraphQLString},
    agreement: {
      type: AgreementItemType,
      args : {agreementId: {type: GraphQLString}},
      resolve: (addendum, args, {loaders}) => loaders.ofbiz.load(`party/agreement/agreementItems/find?agreementId=${addendum.agreementId}`)
    },
    addendumCreationDate: {type: GraphQLString},
    agreementItemSeqId: {type: GraphQLString},
    addendumId: {type: GraphQLString},
    addendumText: {type: GraphQLString}
  })
});

export {AddendumType};
    




const AddendumInputType = new GraphQLInputObjectType({
  name: 'AddendumInputType',
  description: 'input type for Addendum in party',

  fields: () => ({
    addendumEffectiveDate: {type: GraphQLString},
    agreementId: {type: GraphQLString},
    addendumCreationDate: {type: GraphQLString},
    agreementItemSeqId: {type: GraphQLString},
    addendumId: {type: GraphQLString},
    addendumText: {type: GraphQLString}
  })
});

export {AddendumInputType};
    