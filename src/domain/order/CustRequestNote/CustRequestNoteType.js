
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

import {CustRequestType} from '../../order/CustRequest/CustRequestType.js';


const CustRequestNoteType = new GraphQLObjectType({
  name: 'CustRequestNoteType',
  description: 'Type for CustRequestNote in order',

  fields: () => ({
    custRequest: {
      type: CustRequestType,
      args : {custRequestId: {type: GraphQLString}},
      resolve: (custRequestNote, args, {loaders}) => loaders.ofbiz.load(`order/custRequests/find?custRequestId=${custRequestNote.custRequestId}`)
    },
    noteId: {type: GraphQLString}
  })
});

export {CustRequestNoteType};
    