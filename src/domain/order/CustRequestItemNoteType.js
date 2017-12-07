
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {CustRequestItemType} from '../order/CustRequestItemType.js';


const CustRequestItemNoteType = new GraphQLObjectType({
  name: 'CustRequestItemNoteType',
  description: 'Type for CustRequestItemNote in order',

  fields: () => ({
    custRequest: {
      type: CustRequestItemType,
      args : {custRequestId: {type: GraphQLString}},
      resolve: (custRequestItemNote, args, {loaders}) => loaders.ofbiz.load(`custRequestItems/find?custRequestId=${custRequestItemNote.custRequestId}`)
    },
    noteId: {type: GraphQLString},
    custRequestItemSeqId: {type: GraphQLString}
  })
});

export {CustRequestItemNoteType};
    