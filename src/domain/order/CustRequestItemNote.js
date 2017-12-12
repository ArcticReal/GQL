
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

import {CustRequestItemType} from '../order/CustRequestItem.js';


const CustRequestItemNoteType = new GraphQLObjectType({
  name: 'CustRequestItemNoteType',
  description: 'Type for CustRequestItemNote in order',

  fields: () => ({
    custRequest: {
      type: CustRequestItemType,
      args : {custRequestId: {type: GraphQLString}},
      resolve: (custRequestItemNote, args, {loaders}) => loaders.ofbiz.load(`order/custRequest/custRequestItems/find?custRequestId=${custRequestItemNote.custRequestId}`)
    },
    noteId: {type: GraphQLString},
    custRequestItemSeqId: {type: GraphQLString}
  })
});

export {CustRequestItemNoteType};
    




const CustRequestItemNoteInputType = new GraphQLInputObjectType({
  name: 'CustRequestItemNoteInputType',
  description: 'input type for CustRequestItemNote in order',

  fields: () => ({
    custRequestId: {type: GraphQLString},
    noteId: {type: GraphQLString},
    custRequestItemSeqId: {type: GraphQLString}
  })
});

export {CustRequestItemNoteInputType};
    