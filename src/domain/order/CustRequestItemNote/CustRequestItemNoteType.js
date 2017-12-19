
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

import {CustRequestItemType} from '../../order/CustRequestItem/CustRequestItemType.js';


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
    