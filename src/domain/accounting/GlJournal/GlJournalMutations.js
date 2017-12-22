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
import {GlJournalResponseType} from '../../accounting/GlJournal/GlJournalResponseType.js';
import {GlJournalInputType} from '../../accounting/GlJournal/GlJournalInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createGlJournal = {
  type: GlJournalResponseType,
  description: 'mutation for ofbiz createGlJournal method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/glJournals/add?`, null, req);
  }
};
export {createGlJournal};


const updateGlJournal = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateGlJournal method',
  args:{glJournalToBeUpdated: {type: GlJournalInputType},glJournalId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/glJournals/${args.glJournalId}?`, args.glJournalToBeUpdated, req);
  }
};
export {updateGlJournal};


const deleteGlJournalByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteGlJournalByIdUpdated method',
  args:{glJournalId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/glJournals/${args.glJournalId}?`, null, req);
  }
};
export {deleteGlJournalByIdUpdated};
