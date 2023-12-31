<?php
namespace App\Http\Controllers;

use App\Http\Requests\ContactRequest;
use Illuminate\Http\Request;
use App\Models\Contact;
use Illuminate\Support\Facades\Auth;

class ContactController extends Controller
{
    public function index()
    {
        return Contact::with('client')->paginate(10);
    }

    public function store(ContactRequest $request)
    {
        $contact = Contact::create([
            'username' => $request->input('username'),
            'email' => $request->input('email'),
            'message' => $request->input('message'),
            'client_id' => null
        ]);

        return $contact;
    }

    public function show(Contact $contact)
    {
        return $contact;
    }

    public function update(Request $request, Contact $contact)
    {
        $contact->update([
            'username' => $request->input('username'),
            'email' => $request->input('email'),
            'message' => $request->input('message'),
            'done' => $request->input('done')
        ]);

        return $contact;
    }

    public function destroy(Contact $contact)
    {
        $contact->delete();

        return response()->json(['message' => 'Your contact has been removed.']);
    }
}
