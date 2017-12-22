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
import {ApplicationSandboxInputType} from '../../workeffort/ApplicationSandbox/ApplicationSandboxInputType.js';
import {ApplicationSandboxResponseType} from '../../workeffort/ApplicationSandbox/ApplicationSandboxResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createApplicationSandbox = {
  type: ApplicationSandboxResponseType,
  description: 'mutation for ofbiz createApplicationSandbox method',
  args:{applicationSandboxToBeAdded: {type: ApplicationSandboxInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`workeffort/applicationSandboxs/add?`, args.applicationSandboxToBeAdded, req);
  }
};
export {createApplicationSandbox};


const updateApplicationSandbox = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateApplicationSandbox method',
  args:{applicationSandboxToBeUpdated: {type: ApplicationSandboxInputType},applicationId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`workeffort/applicationSandboxs/${args.applicationId}?`, args.applicationSandboxToBeUpdated, req);
  }
};
export {updateApplicationSandbox};


const deleteApplicationSandboxByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteApplicationSandboxByIdUpdated method',
  args:{applicationSandboxId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`workeffort/applicationSandboxs/${args.applicationSandboxId}?`, null, req);
  }
};
export {deleteApplicationSandboxByIdUpdated};
